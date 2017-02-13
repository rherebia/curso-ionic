angular.module('starter').controller('ListagemController', function($scope) {
  $scope.listaDeCarros = ['BMW 120i',
  'ONIX 1.6',
  'Fiesta 2.0',
  'C3 1.0',
  'Uno Fire',
  'Sentra 2.0',
  'Astra Sedan',
  'Vectra 2.0 Turbo',
  'Hilux 4x4',
  'Montana Cabine dupla',
  'Outlander 2.4',
  'Fusca 1500'];

  $scope.endereco = 'Rua Vergueiro, 3185';
}).controller('CarroEscolhidoController', function ($stateParams, $scope) {
  $scope.carroEscolhido = $stateParams.carro;
});
