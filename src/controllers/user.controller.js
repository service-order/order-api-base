exports.postCreate = async (req, res, next) => {
  try {
    let resultado = await Funcionario.validarRegistro(req.body);
    if (!resultado) {
      let funcionario = await Funcionario.criar(req.body);
      return res.json(funcionario);
    } else {
      return res.json({
        error: 'Funcionário já existe!',
      });
    }
  } catch (err) {
    console.log(err.message);
    throw new Error('Não foi possível cadastrar o morador. Tente novamente mais tarde!');
  }
};
