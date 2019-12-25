declare const binCache: {
    get: (key: string) => any;
    set: (key: string, value: any) => {
        key: string;
        value: any;
    };
    delete: (key: string) => void;
    clear: () => void;
};
export default binCache;
