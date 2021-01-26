
{
    props.stats &&
        props.stats.map(stats => (
            <Text>{stats.base_stat}</Text>
        ))
}