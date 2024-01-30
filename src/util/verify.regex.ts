export const StringNotNullAndBlankSpace: RegExp = /^(?!null$)(?!\s*$).+/;

export const NumberRegex: RegExp = /^[0-9]+$/;

export const ValidateCep: RegExp = /^\d{5}-\d{3}$/;

export const TelephoneRegexBrasil: RegExp = /^(\d{2}\s?)?(\d{5}[\s.-]?\d{4})$/;

export const TelephoneInternational: RegExp = /^(\+\d{1,4}\s?)?(\d{1,}\s?[\s.-]?\d{1,})$/;

export const MinCountCaractersPassword: RegExp = /^.{0,4}$/;

export const CnpjValidate: RegExp = /^\d{2}\.\d{3}\.\d{3}\/\d{4}-\d{2}$/;
