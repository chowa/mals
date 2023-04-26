/**
 * 比较类工具集
 */
class DiffUtils {
    /**
     * hasProperty - 判断含有属性
     *
     * @param  {type} obj: any      检测的对象
     * @param  {type} property: any 检测的属性
     * @return {type}               boolean
     */
    public static hasProperty(obj: any, property: any): boolean {
        if (obj === undefined || obj === null) {
            return false;
        }

        return Object.prototype.hasOwnProperty.call(obj, property);
    }

    /**
     * isReactElement - 是否是react原色
     *
     * @param  {type} ele: any 检测对象
     * @return {type}          boolean
     */
    public static isReactElement(ele: any): boolean {
        if (this.hasProperty(ele, '$$typeof') && ele.$$typeof === Symbol.for('react.element')) {
            return true;
        }

        return false;
    }

    /**
     * isEqual - 是否相等
     *
     * @param  {type} a: any 对象A
     * @param  {type} b: any 对象B
     * @return {type}        boolean
     */
    public static isEqual(a: any, b: any): boolean {
        if (a === b) {
            return true;
        }

        if (typeof a === 'object' && typeof b === 'object') {
            if (a === null || b === null) {
                return a === b;
            } else if (this.isReactElement(a) && this.isReactElement(b)) {
                return this.isEqual(a.props, b.props);
            } else if (a instanceof Date && b instanceof Date) {
                return +a === +b;
            } else if (a instanceof RegExp && b instanceof RegExp) {
                return a.toString() === b.toString();
            } else if (Array.isArray(a) && Array.isArray(b)) {
                const arrLen = a.length;

                if (arrLen !== b.length) {
                    return false;
                }
                for (let i = arrLen; i--; i !== 0) {
                    if (!this.isEqual(a[i], b[i])) {
                        return false;
                    }
                }
                return true;
            } else {
                const keys = Object.keys(a);
                const objLen = keys.length;

                if (objLen !== Object.keys(b).length) {
                    return false;
                }

                for (let i = objLen; i--; i !== 0) {
                    if (!this.hasProperty(b, keys[i])) {
                        return false;
                    }
                }

                for (let i = objLen; i--; i !== 0) {
                    const key = keys[i];
                    if (!this.isEqual(a[key], b[key])) {
                        return false;
                    }
                }
                return true;
            }
        }

        return a !== a && b !== b;
    }

    /**
     * isExist - 是否存在
     *
     * @param  {type} a: any 对象A
     * @return {type}        boolean
     */
    public static isExist(a: any): boolean {
        if (
            a === undefined ||
            a === null ||
            a === '' ||
            (typeof a === 'object' && Object.keys(a).length === 0) ||
            (typeof a === 'number' && isNaN(a)) ||
            /^\s+$/.test(a)
        ) {
            return false;
        }

        return true;
    }
}

export default DiffUtils;
