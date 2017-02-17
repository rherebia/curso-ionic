angular.module('app.controllers', []).controller('AgendamentosController', function ($scope, $stateParams, GerenciadorService) {
  $scope.agendamentos = [];

  GerenciadorService.obterAgendamentos().then(function (dados) {
    $scope.agendamentos = dados;
  });
}).controller('FornecedoresController', function ($scope, $stateParams, GerenciadorService) {
  $scope.fornecedores = [];

  GerenciadorService.obterFornecedores().then(function (dados) {
    $scope.fornecedores = dados;
  })
});
