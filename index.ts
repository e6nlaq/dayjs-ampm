import type { PluginFunc, Dayjs } from "dayjs";

declare module "dayjs" {
  interface Dayjs {
    isAm(): boolean;
    isPm(): boolean;
  }
}

const isAmPm: PluginFunc = (option, dayjsClass, dayjsFactory) => {
  const prot = dayjsClass.prototype;

  prot.isAm = function () {
    const dayjs = this as unknown as Dayjs;
    return dayjs.hour() < 12;
  };

  prot.isPm = function () {
    const dayjs = this as unknown as Dayjs;
    return dayjs.hour() >= 12;
  };
};

export default isAmPm;
