<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Contracts\Auth\Guard;
use Illuminate\Validation\ValidationException;
use Illuminate\Support\Facades\Hash;

use App\Models\User;

class AuthhController extends Controller
{
    protected $auth;

    public function __construct(Guard $auth)
    {
        $this->auth = $auth;
    }
    public function register(Request $request)
    {
        $request->validate([
            'username' => 'required|unique:tbl_user',
            'password' => 'required|min:6',
            'email' => 'required|email|unique:tbl_user',
            'nama_lengkap' => 'required',
            'alamat' => 'required',
        ]);

        $user = User::create([
            'username' => $request->username,
            'password' => Hash::make($request->password),
            'email' => $request->email,
            'nama_lengkap' => $request->nama_lengkap,
            'alamat' => $request->alamat,
        ]);

        return response()->json(['user' => $user], 201);
    }

    public function login(Request $request)
    {
        try {
            $credentials = $request->only('email', 'password');

            if ($this->auth->attempt($credentials)) {
                $user = $this->auth->user();

                return response()->json([
                    'message' => 'Login successful',
                    'user' => $user,
                ]);
            } else {
                throw ValidationException::withMessages(['email' => 'Invalid credentials']);
            }
        } catch (\Exception $e) {
            // Log the error for debugging purposes
            \Log::error('Login error: ' . $e->getMessage());

            return response()->json(['message' => 'An error occurred during login'], 500);
        }
    }

    public function logout()
    {
        if ($this->auth->check()) {
            $this->auth->logout();
            return response()->json(['message' => 'Logout successful']);
        } else {
            return response()->json(['message' => 'User not authenticated'], 401);
        }
    }
}
