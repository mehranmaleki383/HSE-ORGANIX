<?php

namespace Tests\Feature;

use Tests\TestCase;

class ApiHealthTest extends TestCase
{
    public function test_api_health_endpoint_returns_expected_response(): void
    {
        $response = $this->getJson('/api/v1/health');

        $response
            ->assertOk()
            ->assertExactJson([
                'status' => 'ok',
                'service' => 'HSE ORGANIX API',
                'version' => 'v1',
            ]);
    }

    public function test_api_health_endpoint_rejects_unsupported_http_methods(): void
    {
        $this->postJson('/api/v1/health')
            ->assertStatus(405);
    }
}