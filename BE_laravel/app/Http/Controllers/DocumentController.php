<?php

namespace App\Http\Controllers;

use App\Models\Document;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class DocumentController extends Controller
{
    public function index()
    {
        return Document::paginate(10);
    }

    public function store(Request $request)
    {
        return Document::create($request->all());
    }

    public function show($id)
    {
        return Document::find($id);
    }

    public function update(Request $request, $id)
    {
        $user = Document::findOrFail($id);
        $user->update($request->all());

        return $user;
    }

    public function delete($id)
    {
        $user = Document::findOrFail($id);
        $user->delete();

        return 204;
    }
}
