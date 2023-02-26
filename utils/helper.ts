export const createPrompt = (str: string, ...params: Array<string>) =>
  params.reduce((result, param, i) => result.replace(new RegExp(`#${i + 1}`, "g"), param), str)
