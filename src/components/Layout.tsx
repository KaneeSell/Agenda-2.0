interface LayoutProps{
    children: any
}
export default function Layout(props: LayoutProps) {
    return (
        <main >
            {props.children}
        </main>
    )
}