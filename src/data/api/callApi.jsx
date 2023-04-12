import { useFetch } from '../../presentation/hooks/useFetch';

export function UserInfo(userId) {
    const { data, isLoading, error } = useFetch(
        `http://localhost:3000/user/${userId}`
    );
    const userData = data && data.data;

    return { userData, isLoading, error };
}

export function UserActivity(userId) {
    const { data, isLoading, error } = useFetch(
        `http://localhost:3000/user/${userId}/activity`
    );
    const userData = data && data.data;

    return { userData, isLoading, error };
}

export function UserSessions(userId) {
    const { data, isLoading, error } = useFetch(
        `http://localhost:3000/user/${userId}/average-sessions`
    );
    const userData = data && data.data;

    return { userData, isLoading, error };
}

export function UserPerformance(userId) {
    const { data, isLoading, error } = useFetch(
        `http://localhost:3000/user/${userId}/performance`
    );
    const userData = data && data.data;

    return { userData, isLoading, error };
}
