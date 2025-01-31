import { appError } from "../utils/error.js";

export const validate = (schema) => (req, res, next) => {
  let filters = {};
  if (req.file || req.files) {
    filters = {
      image: req.file ? req.file : req.files,
      ...req.body,
      ...req.params,
      ...req.query,
    };
  } else {
    filters = { ...req.body, ...req.params, ...req.query };
  }

  let { error } = schema.validate({ filters }, { abortEarly: false });
  if (error)
    throw new appError(error.details.map(({ message }) => message, 400));
  next();
};

export default validate;
