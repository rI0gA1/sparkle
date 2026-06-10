import React from 'react'

const NEKO_BASE64 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQ1IDc5LjE2MzQ5OSwgMjAxOC8wOC8xMy0xNjo0MDoyMiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTkgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjI2M0Y3M0RGMTg4MzExRjFCRUYyOEE2MTY1MDE2QTkwIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjI2M0Y3M0UwMTg4MzExRjFCRUYyOEE2MTY1MDE2QTkwIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6MjYzRjczREQxODgzMTFGMUJFRjI4QTYxNjUwMTZBOTAiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6MjYzRjczREUxODgzMTFGMUJFRjI4QTYxNjUwMTZBOTAiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz6dI/HjAAAAYFBMVEWnqKLR8LTExcH9+/erzpb+lZLk/b4ODwzfwmR0dHFLTkmS4cRSRTaKjIXe4N3R081kZ2B8r4z4xLZngF368+/85Nl+Zy3r7elbXVY8Pzs5WUguLyrw+vPI7d7///////+VVr74AAAAIHRSTlP/////////////////////////////////////////AFxcG+0AAAH6SURBVHjahJPhktswCISx5FoRMRY5ybEUHO7937KoSVzfTGfKT/PN7gowfP+n4N+f9Segqj/b66/y+dQBjUjbGdFfvfwBlJYIa/qL6FcHygEsqOqhonsjhZz1v/QAUtXnU9VVTD2N56Rl9acMjvV6vRpSA2KEtOkpdQeAdwOuhNGlxREGQayRwPXkB3B7tMiIFkRB3OIcUETcDuAWQmMYBpDoFdpz37sPpjewWT8P0zQN04C4Kz+657a18gpZnfA4WNNqmirqJjcDdqr6fibn8ZbzOHaRaUJWMonn1twr5CZtBA4yWmVTqgE2MQeQ9yt8yJwR0DzGIPU2X5pifi4In2XJKKGmZg55xhvep0rxsYD4z6hxEKIWHrdRVs7zZboIY2qgL0ApD23VjbiZUA33y/0+C8am3wcwoi92IomSi31i0qCF5bML21FlLZ1Q7z3nacpxeRn8Abwpi/clklu8T0IdSLgc2/QiENhrggiFW8Q8IZ0BTSGuc1+jXYStqkgWdwa+dQngSVoEsOMrEASSk+V89i1ZhCBzkFhnCUQsfD57inaEHHG2NGlJ1ZDjN3gta/Pr10zR2fipNhGO55vUSCZAYsPYhQkAqLV0AnxbuwALph5S95SQ+WRRsJQVQuyvkMXvBtSI/mTRnAlIY795qh1wkbC8gd8CDABhzVF7j8JGfAAAAABJRU5ErkJggg=="

interface MihomoIconProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  size?: number | string
}

const MihomoIcon: React.FC<MihomoIconProps> = ({ 
  size, 
  className, 
  style, 
  ...props 
}) => {
  return (
    <img
      src={NEKO_BASE64}
      alt="neko"
      className={`inline-block object-contain h-full w-auto pointer-events-none ${className || ''}`}
      style={{
        width: size || 'auto',
        height: size || 'auto',
        verticalAlign: 'middle',
        ...style
      }}
      {...props}
    />
  )
}

export default MihomoIcon