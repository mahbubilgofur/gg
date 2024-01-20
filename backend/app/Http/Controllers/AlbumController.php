<?php

namespace App\Http\Controllers;

use App\Models\Album;
use Illuminate\Http\Request;

class AlbumController extends Controller
{
    public function index()
    {
        $albums = Album::all();
        return response()->json(['albums' => $albums], 200);
    }

    public function show($id_album)
    {
        $album = Album::find($id_album);
        if (!$album) {
            return response()->json(['message' => 'Album not found'], 404);
        }
        return response()->json(['album' => $album], 200);
    }

    public function store(Request $request)
    {
        $album = Album::create($request->all());
        return response()->json(['album' => $album], 201);
    }

    public function update(Request $request, $id_album)
    {
        $album = Album::find($id_album);
        if (!$album) {
            return response()->json(['message' => 'Album not found'], 404);
        }
        $album->update($request->all());
        return response()->json(['album' => $album], 200);
    }

    public function destroy($id_album)
    {
        $album = Album::find($id_album);
        if (!$album) {
            return response()->json(['message' => 'Album not found'], 404);
        }
        $album->delete();
        return response()->json(['message' => 'Album deleted successfully'], 200);
    }
}
