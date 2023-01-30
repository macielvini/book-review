import { ApplicationError } from "../protocols/application-error";

export function badRequestError(message: string): ApplicationError {
  return {
    name: "BadRequestError",
    message,
  };
}
