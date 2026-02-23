export const isValidUrl = (url: string): boolean => {
  try {
    const newUrl = new URL(url);
    return newUrl.protocol === "http:" || newUrl.protocol === "https:";
  } catch {
    return false;
  }
};

export const isValidateGitHubRepo = (url: string): boolean => {
  return isValidUrl(url) && url.includes("github.com/");
};
