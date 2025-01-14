export default function Button({title,bg}) {
    const css=`bg-${"red"} p-3 rounded-md text-sm`
    return (
        <p className={css}>{title}</p>
    )
}