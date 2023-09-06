export const Statistics = props => {
  return (
    <section class="statistics">
      {props.title && <h2 class="title">{props.title}</h2>}

      <ul class="stat-list">
        {props.stats.map(data => (
          <li class="item" key={data.id}>
            <span class="label">{data.label}</span>
            <span class="percentage">{data.percentage}</span>
          </li>
        ))}
      </ul>
    </section>
  );
};
