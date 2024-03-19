<?php

use src\legacy\TennisGame;

test('example', function () {
    $tennisGame1 = new TennisGame('player1', 'player2');
    $tennisGame1->wonPoint('player1');
    $score = $tennisGame1->getScore();
    expect($score)->toBe('Fifteen-Love');
});
