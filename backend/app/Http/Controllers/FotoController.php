<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Foto;

class FotoController extends Controller
{
    public function index()
    {
        $fotos = Foto::all();
        return response()->json(['fotos' => $fotos]);
    }

    public function show($id_foto)
    {
        $foto = Foto::find($id_foto);
        return response()->json(['foto' => $foto]);
    }

    public function store(Request $request)
    {
        $foto = Foto::create($request->all());
        return response()->json(['foto' => $foto]);
    }

    public function update(Request $request, $id_foto)
    {
        $foto = Foto::find($id_foto);
        $foto->update($request->all());
        return response()->json(['foto' => $foto]);
    }

    public function destroy($id_foto)
    {
        $foto = Foto::find($id_foto);
        $foto->delete();
        return response()->json(['message' => 'Foto deleted successfully']);
    }
}
