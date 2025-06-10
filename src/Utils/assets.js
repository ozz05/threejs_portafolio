export function getAssetPath(relativePath) {
    return `${import.meta.env.BASE_URL}${relativePath}`;
}