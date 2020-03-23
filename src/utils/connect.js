/**
 * Function which resolves after 5s
 */
export function connectFake(user) {
    return new Promise(resolve => setTimeout(() => resolve(true), 5000));
}