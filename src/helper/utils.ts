import { forEach, get } from "lodash";
import moment from "moment";

export const ResponseHandler = (response: any) => {
  return {
    status: get(response, "data.status", ""),
    statusCode: get(response, "status", 200),
    data: get(response, "data", {}),
    message: get(response, "data.message", ""),
  };
};

export const getKeyMessageFromErrors = (errors: any) => {
  let message;
  forEach(errors, (error, key) => {
    if (key === get(error, "field", "")) {
      message = get(error, "message", "");
    }
  });
  return message;
};

export const getDateAndTime = (date: any) => {
  if (!date) return "";
  const dateTime: any = new Date(date);
  return moment.unix(dateTime).format("DD-MM-YYYY HH:MM:SS");
  // return format(dateTime, dateFormat);
};

export const getDateMonth = (date: any, dateFormat: any) => {
  if (!date) return "";
  const dateTime = new Date(date);
  return moment(dateTime).format("MMM-YYYY");
};

export const ethLamports = (value: number) => {
  return value / 10 ** 18;
};
