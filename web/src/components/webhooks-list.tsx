import { webhooksListSchema } from '../http/schemas/webhooks'
import { WebhookListItem } from './webhook-list-item'
import { useSuspenseQuery } from '@tanstack/react-query'

export function WebhookList() {

  const { data } = useSuspenseQuery({
    queryKey: ['webhooks'],
    queryFn: async () => {
      const response = await fetch('http://localhost:3333/api/webhooks')
      const data = await response.json()

      return webhooksListSchema.parse(data)
    },    
  })

  return (
    <div className="flex-1 overflow-y-auto">
      <div className="space-y-4 p-2">
        {data.webhooks.map(webhook => {
          return <WebhookListItem key={webhook.id} webhook={webhook}/>
        })}
      </div>
    </div>
  )
}
