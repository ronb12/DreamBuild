import React from 'react'
import { motion } from 'framer-motion'
import { 
  Lightbulb, 
  Code, 
  Shield, 
  Zap, 
  ArrowRight,
  Star,
  Clock,
  CheckCircle
} from 'lucide-react'

const RecommendationCard = ({ recommendation, onApply, onDismiss }) => {
  const getRecommendationIcon = () => {
    switch (recommendation.type) {
      case 'technology':
        return <Code className="h-4 w-4" />
      case 'feature':
        return <Lightbulb className="h-4 w-4" />
      case 'performance':
        return <Zap className="h-4 w-4" />
      case 'security':
        return <Shield className="h-4 w-4" />
      default:
        return <Lightbulb className="h-4 w-4" />
    }
  }

  const getPriorityColor = () => {
    switch (recommendation.priority) {
      case 'high':
        return 'text-red-600 bg-red-50 border-red-200'
      case 'medium':
        return 'text-yellow-600 bg-yellow-50 border-yellow-200'
      case 'low':
        return 'text-green-600 bg-green-50 border-green-200'
      default:
        return 'text-blue-600 bg-blue-50 border-blue-200'
    }
  }

  const getPriorityIcon = () => {
    switch (recommendation.priority) {
      case 'high':
        return <Star className="h-3 w-3 fill-current" />
      case 'medium':
        return <Clock className="h-3 w-3" />
      case 'low':
        return <CheckCircle className="h-3 w-3" />
      default:
        return <Lightbulb className="h-3 w-3" />
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.2 }}
      className="bg-card border border-border rounded-lg p-4 hover:shadow-md transition-shadow"
    >
      <div className="flex items-start gap-3">
        {/* Icon */}
        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
          {getRecommendationIcon()}
        </div>

        {/* Content */}
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-2">
            <h4 className="font-medium text-sm">{recommendation.title}</h4>
            <span className={`inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs border ${getPriorityColor()}`}>
              {getPriorityIcon()}
              {recommendation.priority}
            </span>
          </div>
          
          <p className="text-sm text-muted-foreground mb-3">
            {recommendation.description}
          </p>

          {recommendation.action && (
            <div className="bg-muted rounded p-2 mb-3">
              <p className="text-xs text-muted-foreground">
                <strong>Suggestion:</strong> {recommendation.action}
              </p>
            </div>
          )}

          {/* Actions */}
          <div className="flex items-center gap-2">
            {onApply && (
              <button
                onClick={() => onApply(recommendation)}
                className="inline-flex items-center gap-1 px-3 py-1.5 bg-primary text-primary-foreground rounded text-xs hover:bg-primary/90 transition-colors"
              >
                <ArrowRight className="h-3 w-3" />
                Apply
              </button>
            )}
            
            {onDismiss && (
              <button
                onClick={() => onDismiss(recommendation.id)}
                className="text-xs text-muted-foreground hover:text-foreground transition-colors"
              >
                Dismiss
              </button>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default RecommendationCard
