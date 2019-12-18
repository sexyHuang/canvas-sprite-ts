import URLParse from 'url-parse';

// crossOrigin = 'anonymous'
function isCrossOrigin(url: string) {
  if (!/^data:/.test(url)) {
    let parsedUrl = new URLParse(url);
    return parsedUrl.origin !== window.location.origin;
  }
  return false;
}

export default isCrossOrigin;
