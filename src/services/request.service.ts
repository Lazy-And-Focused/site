const request = async <T>(input: string | URL | globalThis.Request, init?: RequestInit): Promise<{
  success: true
  content: Response,
  status: number,
  data: T
} | {
  success: false
  content: Response,
  status: number,
  data: unknown
}> => {
  const data = await fetch(input, init);
  
  try {
    return {
      success: (data.status >= 200 && data.status < 300) ? true : false,
      content: data,
      status: data.status,
      data: (await data.json()) as T
    };
  } catch (error) {
    return {
      success: false,
      content: data,
      status: data.status,
      data: error,
    };
  }
};

export { request };

export default request;