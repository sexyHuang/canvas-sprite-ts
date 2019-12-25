interface FetchResolve {
    url: string;
    result?: FileReader['result'];
}
declare function fetchAsDataURL(url: string): Promise<FetchResolve>;
export default fetchAsDataURL;
