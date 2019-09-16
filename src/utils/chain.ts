/** @format */

interface ChainProps {
    fn: Function;
    node?: Chain;
    executeMethod?: 'result' | 'args';
    primeMethod: 'result' | 'args';
}

export class Chain {
    next: Chain | null;
    fn: Function;
    primeMethod: 'result' | 'args';
    executeMethod?: 'result' | 'args';
    constructor({ node, fn, primeMethod = 'result' }: ChainProps) {
        this.next = node || null;
        this.fn = fn;
        this.primeMethod = primeMethod;
    }
    start(...args: any[]) {
        this.executeMethod = this.primeMethod;
        this.execute(...args);
    }
    execute(...args: any[]): any {
        const result = this.fn(...args);
        if (this.executeMethod === 'args') {
            if (this.next === null) {
                return;
            }
            this.next.executeMethod = this.executeMethod;
            return this.next.execute(...args);
        }
        if (this.next === null) {
            return result;
        }
        this.next.executeMethod = this.executeMethod;
        return this.next.execute(result);
    }
}
