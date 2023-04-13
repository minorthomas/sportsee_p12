import { useFetch } from '../../presentation/hooks/useFetch';

/**
 * Used to call user data via an api url
 * 
 * @param Number - userId 
 * @return Array - userData
 * @return Boolean - isLoading
 * @return Boolean - error
 */
export function UserInfo(userId) {
    const { data, isLoading, error } = useFetch(
        `http://localhost:3000/user/${userId}`
    );
    const userData = data && data.data;

    return { userData, isLoading, error };
}

/**
 * Used to call user activity via an api url
 * 
 * @param Number - userId 
 * @return Array - userData
 * @return Boolean - isLoading
 * @return Boolean - error
 */
export function UserActivity(userId) {
    const { data, isLoading, error } = useFetch(
        `http://localhost:3000/user/${userId}/activity`
    );
    const userData = data && data.data;

    return { userData, isLoading, error };
}

/**
 * Used to call user sessions via an api url
 * 
 * @param Number - userId 
 * @return Array - userData
 * @return Boolean - isLoading
 * @return Boolean - error
 */
export function UserSessions(userId) {
    const { data, isLoading, error } = useFetch(
        `http://localhost:3000/user/${userId}/average-sessions`
    );
    const userData = data && data.data;

    return { userData, isLoading, error };
}

/**
 * Used to call user performance via an api url
 * 
 * @param Number - userId 
 * @return Array - userData
 * @return Boolean - isLoading
 * @return Boolean - error
 */
export function UserPerformance(userId) {
    const { data, isLoading, error } = useFetch(
        `http://localhost:3000/user/${userId}/performance`
    );
    const userData = data && data.data;

    return { userData, isLoading, error };
}
