 export function setCurrentTenant(): string {
    //get tenant from localStorage
    let currentTenant: string = 'microsoft'; 
    
    let paths: string[] = location.pathname.split('/').splice(1, 1);
    let basePath: string = (paths && paths[0]) || currentTenant; 
    return '/'   + basePath;

}