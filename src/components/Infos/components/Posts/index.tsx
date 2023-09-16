import { StyledLinks } from './style'

interface PostsProps {
    titulo: string
    data: string
}

export default function Posts({ titulo, data }: PostsProps) {
    return(
        <StyledLinks>    
            <h4>{titulo}</h4>
            <span>{data}</span>
        </StyledLinks>
    )
}