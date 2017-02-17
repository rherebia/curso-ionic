angular.module('starter').controller('ListagemController', function($scope, CarroService) {
  CarroService.obterCarros().then(function (dados) {
    $scope.listaDeCarros = dados;
  });

  $scope.endereco = 'Rua Vergueiro, 3185';
});
