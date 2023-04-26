class StorageUtils {
    /**
     * @public static - 设置本地存储
     *
     * @param  {type} key: string   字段名
     * @param  {type} value: string 值
     * @return {type}               void
     */
    public static setLocal(key: string, value: string): void {
        window.localStorage.setItem(key, value);
    }

    /**
     * @public static - 获取本地存储
     *
     * @param  {type} key: string 字段名
     */
    public static getLocal(key: string): string | null {
        return window.localStorage.getItem(key);
    }

    /**
     * @public static - 删除本地存储
     *
     * @param  {type} key: string 字段名
     * @return {type}             void
     */
    public static removeLocal(key: string): void {
        localStorage.removeItem(key);
    }

    // public static listenerLocal(fn: () => any): void {
    //     window.addEventListener('storage', fn, false);
    // }

    /**
     * @public static - 设置session
     *
     * @param  {type} key: string   description
     * @param  {type} value: string description
     * @return {type}               description
     */
    public static setSession(key: string, value: string): void {
        window.sessionStorage.setItem(key, value);
    }

    /**
     * @public static - 获取session存储
     *
     * @param  {type} key: string 字段名
     */
    public static getSession(key: string): string | null {
        return window.sessionStorage.getItem(key);
    }

    /**
     * @public static - 删除session存储
     *
     * @param  {type} key: string 字段名
     * @return {type}             void
     */
    public static removeSession(key: string): void {
        window.sessionStorage.removeItem(key);
    }
}

export default StorageUtils;
