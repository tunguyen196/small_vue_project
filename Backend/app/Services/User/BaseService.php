<?php

namespace App\Services\User;

abstract class BaseService
{
    protected $model;

    public function create($data = [])
    {
        return $this->model::create($data);
    }
}
