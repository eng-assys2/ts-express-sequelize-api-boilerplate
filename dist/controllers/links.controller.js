"use strict";Object.defineProperty(exports, "__esModule", {value: true});var _basecontroller = require('./base-controller');

var _linkrepository = require('../repositories/link.repository');

 class LinkController extends _basecontroller.BaseController {
  constructor () {
    super(new (0, _linkrepository.LinkRepository)())
  }
} exports.LinkController = LinkController;