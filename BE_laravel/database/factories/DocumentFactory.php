<?php

namespace Database\Factories;

use App\Models\Document;
use App\Model\User;
use Illuminate\Database\Eloquent\Factories\Factory;

class DocumentFactory extends Factory
{

    protected $model = Document::class;

    public function definition(): array
    {
        return [
            'user_id' => User::factory(),
            'tag' => $this->faker->tag(),
            'name' => $this->faker->name(),
            'filepath' => $this->faker->filepath(),
        ];
    }
}
