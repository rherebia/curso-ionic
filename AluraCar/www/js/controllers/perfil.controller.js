angular.module('starter').controller('PerfilController', function ($rootScope, $scope, $cordovaCamera) {
  $scope.estaEditando = false;
  $scope.textoBotao = 'Editar';

  $scope.usuarioLogado = $rootScope.usuario;

  $scope.acaoBotao = function () {
    if ($scope.estaEditando) {
      $scope.estaEditando = false;
      $scope.textoBotao = 'Editar';
    } else {
      $scope.estaEditando = true;
      $scope.textoBotao = 'Salvar';
    }
  };

  $scope.tirarFoto = function () {
    var opcoes = {
      quality: 70,
      correctOrientation: true,
      cameraDirection: 1
    };

    $cordovaCamera.getPicture(opcoes).then(function (foto) {
      $scope.caminhoFoto = foto;
    }, function (erro) {

    })
  };
});
