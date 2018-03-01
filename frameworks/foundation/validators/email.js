// ==========================================================================
// Project:   SproutCore - JavaScript Application Framework
// Copyright: ©2006-2011 Strobe Inc. and contributors.
//            Portions ©2008-2011 Apple Inc. All rights reserved.
// License:   Licensed under MIT license (see license.js)
// ==========================================================================

sc_require('validators/validator') ;

/**
  Requires a valid email format.

  @class
  @extends SC.Validator
  @version 1.0
*/
SC.Validator.Email = SC.Validator.extend(
/** @scope SC.Validator.Email.prototype */ {

  validate: function(form, field) {
    return (field.get('fieldValue') || '').match(SC.Validator.Email.EMAIL_REGEX_PATTERN) ;
  },

  validateError: function(form, field) {
    var label = field.get('errorLabel') || 'Field' ;
    return SC.$error(SC.String.loc("Invalid.Email(%@)", label), label) ;
  }

}) ;

SC.mixin(SC.Validator.Email,
  /** @scope SC.Validator.Email */ {
  // This is the email validation regex as recommended by W3C: https://www.w3.org/TR/2017/REC-html52-20171214/sec-forms.html#email-state-typeemail
  EMAIL_REGEX_PATTERN: /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/
});

/**
  This variant allows an empty field as well as an email address.

  @class
  @extends SC.Validator.Email
  @author Charles Jolley
  @version 1.0
*/
SC.Validator.EmailOrEmpty = SC.Validator.Email.extend(
/** @scope SC.Validator.EmailOrEmpty.prototype */ {
  validate: function(form, field) {
    var value = field.get('fieldValue') ;
    return (value && value.length > 0) ? value.match(SC.Validator.Email.EMAIL_REGEX_PATTERN) : true ;
  }
}) ;
