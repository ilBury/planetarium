export interface News {
  id?: number,
  header: string,
  picture?: string[],
  content?: string[]
}

export interface OneNews {
  header: string,
  picture?: string,
  content?: string
}
