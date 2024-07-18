interface ErrorObject {
  type: string;
  message: string;
}

type SetErrorFunction = (field: string, error: ErrorObject) => void;
