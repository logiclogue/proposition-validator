# Proposition Validator

Checks a given proposition to see whether it is a well formed formula.

## Usage

```
var validate = require("proposition-validator");

validate("¬((q∧¬(p∧¬p)))");
// true

validate("¬((q∧¬(p∧¬()p)))");
// false
```

## Author

Jordan Lord

## License

GPL-3.0
