<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Like;

class LikeController extends Controller
{
    public function index()
    {
        $likes = Like::all();
        return response()->json(['likes' => $likes]);
    }

    public function show($id_like)
    {
        $like = Like::find($id_like);
        return response()->json(['like' => $like]);
    }

    public function store(Request $request)
    {
        $like = Like::create($request->all());
        return response()->json(['like' => $like]);
    }

    public function update(Request $request, $id_like)
    {
        $like = Like::find($id_like);
        $like->update($request->all());
        return response()->json(['like' => $like]);
    }

    public function destroy($id_like)
    {
        $like = Like::find($id_like);
        $like->delete();
        return response()->json(['message' => 'Like deleted successfully']);
    }
}
