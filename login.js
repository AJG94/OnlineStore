let registros = [

];

exports.registros = registros;

function validar_captcha(rcaptcha) {
  return rcaptcha == 5;
}

function iniciar_sesion(usuario, contrasena, rcaptcha) {
  let result = false;
  const existUser = registros
    .map((el) => {
      return el.usuario;
    })
    .indexOf(usuario);

  if (existUser > -1) {
    const user = registros[existUser];
    if (user.contrasena === contrasena) {
      result = validar_captcha(rcaptcha);
    }
  }

  return result;
}

module.exports.validar_captcha = validar_captcha;
module.exports.iniciar_sesion = iniciar_sesion;

