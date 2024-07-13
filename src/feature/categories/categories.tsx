'use client'
import { useEffect } from 'react'

import { itemStyle, listStyle, textStyle } from '@/feature/categories/ui/styles'
import categoriesStore from '@/shared/stores/categories-store'
import { Card } from '@/shared/ui/card/card'
import { Spinner } from '@/shared/ui/spinner/spinner'
import { observer } from 'mobx-react-lite'
import Link from 'next/link'

export const Categories = observer(() => {
  const { categories, error, getCategories, isLoading } = categoriesStore

  useEffect(() => {
    getCategories()
  }, [])

  if (isLoading) {
    return <Spinner />
  }

  if (error) {
    return <span className={'error'}>{error}</span>
  }

  const categoriesId = Object.keys(categories)

  return (
    <div>
      {categoriesId.length ? (
        <ul css={listStyle}>
          {categoriesId.map(item => (
            <li css={itemStyle} key={item}>
              <Card as={Link} css={itemStyle} href={`/level?category_id=${item}`} key={item}>
                {categories[item].name}
              </Card>
            </li>
          ))}
        </ul>
      ) : (
        <span css={textStyle}>There are no categories</span>
      )}
    </div>
  )
})
