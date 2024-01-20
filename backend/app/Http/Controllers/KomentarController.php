<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Komentar;

class KomentarController extends Controller
{
    public function index()
    {
        $komentars = Komentar::all();
        return response()->json(['komentars' => $komentars]);
    }

    public function show($id_komentar)
    {
        $komentar = Komentar::find($id_komentar);
        return response()->json(['komentar' => $komentar]);
    }

    public function store(Request $request)
    {
        $komentar = Komentar::create($request->all());
        return response()->json(['komentar' => $komentar]);
    }

    public function update(Request $request, $id_komentar)
    {
        $komentar = Komentar::find($id_komentar);
        $komentar->update($request->all());
        return response()->json(['komentar' => $komentar]);
    }

    public function destroy($id_komentar)
    {
        $komentar = Komentar::find($id_komentar);
        $komentar->delete();
        return response()->json(['message' => 'Komentar deleted successfully']);
    }
}
