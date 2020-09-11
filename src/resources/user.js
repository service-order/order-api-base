'use strict';

require('../model');

const msg = require('../../../config/error/error');
const mongoose = require('mongoose');
const _morador = mongoose.model('moradores');

class Morador {
  // get's
  static async checkCadastro(data) {
    const { cpf } = data;
    try {
      return await _morador.findOne({ cpf });
    } catch (err) {
      throw new Error(err.message);
    }
  }

  // post's
  static async postInfoMorador(dados) {
    try {
      return await new _morador(dados).save();
    } catch (err) {
      // para o desenvolvedor
      msg.smserror(err.message);
      // para o usuario
      throw new Error(
        'Não foi possível cadastrar o morador. Tente novamente mais tarde!'
      );
    }
  }

  // patch's
  static async patchInfoDependentes(document, newDependentes) {
    let { _id } = document;
    try {
      await _morador.findByIdAndUpdate({ _id }, newDependentes);
    } catch (err) {
      throw new Error(err.message);
    }
  }
}

module.exports = Morador;
