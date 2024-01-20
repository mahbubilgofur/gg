<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;

class UserController extends Controller
{
    public function index()
    {
        $users = User::all();
        return response()->json(['users' => $users], 200);
    }

    public function show($id_user)
    {
        $user = User::find($id_user);

        if (!$user) {
            return response()->json(['message' => 'User not found'], 404);
        }

        return response()->json(['user' => $user], 200);
    }

    public function store(Request $request)
    {
        $request->validate([
            'username' => 'required',
            'password' => 'required',
            'email' => 'required|email',
            'nama_lengkap' => 'required',
            'alamat' => 'required',
        ]);

        $user = User::create($request->all());

        return response()->json(['user' => $user], 201);
    }

    public function update(Request $request, $id_user)
    {
        $request->validate([
            'username' => 'required',
            'password' => 'required',
            'email' => 'required|email',
            'nama_lengkap' => 'required',
            'alamat' => 'required',
        ]);

        $user = User::find($id_user);

        if (!$user) {
            return response()->json(['message' => 'User not found'], 404);
        }

        $user->update($request->all());

        return response()->json(['user' => $user], 200);
    }

    public function destroy($id_user)
    {
        $user = User::find($id_user);

        if (!$user) {
            return response()->json(['message' => 'User not found'], 404);
        }

        $user->delete();

        return response()->json(['message' => 'User deleted successfully'], 200);
    }
}
