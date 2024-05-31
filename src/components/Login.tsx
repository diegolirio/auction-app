type LoginProps = {
    user: string
}

export function Login(props: LoginProps) {
    return <p>Login - {props.user}</p>
}
