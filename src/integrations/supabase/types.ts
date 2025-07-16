export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instanciate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "12.2.3 (519615d)"
  }
  public: {
    Tables: {
      announcements: {
        Row: {
          content: string
          created_at: string
          id: string
          is_active: boolean | null
          priority: string | null
          title: string
          updated_at: string
        }
        Insert: {
          content: string
          created_at?: string
          id?: string
          is_active?: boolean | null
          priority?: string | null
          title: string
          updated_at?: string
        }
        Update: {
          content?: string
          created_at?: string
          id?: string
          is_active?: boolean | null
          priority?: string | null
          title?: string
          updated_at?: string
        }
        Relationships: []
      }
      educational_videos: {
        Row: {
          created_at: string
          description: string | null
          difficulty_level: string | null
          duration: string | null
          id: string
          thumbnail_url: string | null
          title: string
          topics: string[] | null
          updated_at: string
          video_url: string | null
          views_count: number | null
        }
        Insert: {
          created_at?: string
          description?: string | null
          difficulty_level?: string | null
          duration?: string | null
          id?: string
          thumbnail_url?: string | null
          title: string
          topics?: string[] | null
          updated_at?: string
          video_url?: string | null
          views_count?: number | null
        }
        Update: {
          created_at?: string
          description?: string | null
          difficulty_level?: string | null
          duration?: string | null
          id?: string
          thumbnail_url?: string | null
          title?: string
          topics?: string[] | null
          updated_at?: string
          video_url?: string | null
          views_count?: number | null
        }
        Relationships: []
      }
      employment_data: {
        Row: {
          created_at: string
          employment_type: string
          id: string
          job_category: string | null
          job_count: number | null
          location_id: string | null
          reporting_period: string | null
          salary_range: string | null
          skill_level: string | null
          training_programs: string[] | null
          updated_at: string
        }
        Insert: {
          created_at?: string
          employment_type: string
          id?: string
          job_category?: string | null
          job_count?: number | null
          location_id?: string | null
          reporting_period?: string | null
          salary_range?: string | null
          skill_level?: string | null
          training_programs?: string[] | null
          updated_at?: string
        }
        Update: {
          created_at?: string
          employment_type?: string
          id?: string
          job_category?: string | null
          job_count?: number | null
          location_id?: string | null
          reporting_period?: string | null
          salary_range?: string | null
          skill_level?: string | null
          training_programs?: string[] | null
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "employment_data_location_id_fkey"
            columns: ["location_id"]
            isOneToOne: false
            referencedRelation: "mining_locations"
            referencedColumns: ["id"]
          },
        ]
      }
      environmental_studies: {
        Row: {
          compliance_status: string | null
          created_at: string
          findings: string | null
          id: string
          location_id: string | null
          mitigation_measures: string[] | null
          monitoring_parameters: Json | null
          recommendations: string[] | null
          report_url: string | null
          study_date: string | null
          study_title: string
          study_type: string
          updated_at: string
        }
        Insert: {
          compliance_status?: string | null
          created_at?: string
          findings?: string | null
          id?: string
          location_id?: string | null
          mitigation_measures?: string[] | null
          monitoring_parameters?: Json | null
          recommendations?: string[] | null
          report_url?: string | null
          study_date?: string | null
          study_title: string
          study_type: string
          updated_at?: string
        }
        Update: {
          compliance_status?: string | null
          created_at?: string
          findings?: string | null
          id?: string
          location_id?: string | null
          mitigation_measures?: string[] | null
          monitoring_parameters?: Json | null
          recommendations?: string[] | null
          report_url?: string | null
          study_date?: string | null
          study_title?: string
          study_type?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "environmental_studies_location_id_fkey"
            columns: ["location_id"]
            isOneToOne: false
            referencedRelation: "mining_locations"
            referencedColumns: ["id"]
          },
        ]
      }
      faq_entries: {
        Row: {
          answer: string
          category: string | null
          created_at: string
          id: string
          is_published: boolean | null
          question: string
          system_filter: string | null
          updated_at: string
        }
        Insert: {
          answer: string
          category?: string | null
          created_at?: string
          id?: string
          is_published?: boolean | null
          question: string
          system_filter?: string | null
          updated_at?: string
        }
        Update: {
          answer?: string
          category?: string | null
          created_at?: string
          id?: string
          is_published?: boolean | null
          question?: string
          system_filter?: string | null
          updated_at?: string
        }
        Relationships: []
      }
      faq_issues: {
        Row: {
          created_at: string
          id: string
          issue_description: string
          resolved_date: string | null
          solution: string
          system_affected: string | null
          title: string
          updated_at: string
        }
        Insert: {
          created_at?: string
          id?: string
          issue_description: string
          resolved_date?: string | null
          solution: string
          system_affected?: string | null
          title: string
          updated_at?: string
        }
        Update: {
          created_at?: string
          id?: string
          issue_description?: string
          resolved_date?: string | null
          solution?: string
          system_affected?: string | null
          title?: string
          updated_at?: string
        }
        Relationships: []
      }
      files: {
        Row: {
          category: string | null
          created_at: string
          description: string | null
          file_path: string
          file_size: number | null
          file_type: string
          id: string
          name: string
          system_filter: string | null
          updated_at: string
          uploaded_by: string | null
        }
        Insert: {
          category?: string | null
          created_at?: string
          description?: string | null
          file_path: string
          file_size?: number | null
          file_type: string
          id?: string
          name: string
          system_filter?: string | null
          updated_at?: string
          uploaded_by?: string | null
        }
        Update: {
          category?: string | null
          created_at?: string
          description?: string | null
          file_path?: string
          file_size?: number | null
          file_type?: string
          id?: string
          name?: string
          system_filter?: string | null
          updated_at?: string
          uploaded_by?: string | null
        }
        Relationships: []
      }
      game_sessions: {
        Row: {
          completed: boolean | null
          created_at: string
          game_type: string
          id: string
          player_name: string
          score: number | null
          session_data: Json | null
        }
        Insert: {
          completed?: boolean | null
          created_at?: string
          game_type: string
          id?: string
          player_name: string
          score?: number | null
          session_data?: Json | null
        }
        Update: {
          completed?: boolean | null
          created_at?: string
          game_type?: string
          id?: string
          player_name?: string
          score?: number | null
          session_data?: Json | null
        }
        Relationships: []
      }
      health_systems: {
        Row: {
          category: string
          created_at: string
          description: string | null
          id: string
          is_active: boolean | null
          name: string
          updated_at: string
          url: string
        }
        Insert: {
          category: string
          created_at?: string
          description?: string | null
          id?: string
          is_active?: boolean | null
          name: string
          updated_at?: string
          url: string
        }
        Update: {
          category?: string
          created_at?: string
          description?: string | null
          id?: string
          is_active?: boolean | null
          name?: string
          updated_at?: string
          url?: string
        }
        Relationships: []
      }
      iaea_classifications: {
        Row: {
          category: string
          classification_type: string
          compliance_requirements: string[] | null
          created_at: string
          criteria: Json | null
          description: string | null
          documentation_url: string | null
          id: string
          standards: string | null
          updated_at: string
        }
        Insert: {
          category: string
          classification_type: string
          compliance_requirements?: string[] | null
          created_at?: string
          criteria?: Json | null
          description?: string | null
          documentation_url?: string | null
          id?: string
          standards?: string | null
          updated_at?: string
        }
        Update: {
          category?: string
          classification_type?: string
          compliance_requirements?: string[] | null
          created_at?: string
          criteria?: Json | null
          description?: string | null
          documentation_url?: string | null
          id?: string
          standards?: string | null
          updated_at?: string
        }
        Relationships: []
      }
      market_predictions: {
        Row: {
          actual_value: number | null
          commodity: string | null
          confidence_level: string | null
          created_at: string
          id: string
          key_factors: string[] | null
          methodology: string | null
          predicted_value: number | null
          prediction_date: string | null
          prediction_type: string
          target_date: string | null
          timeframe: string | null
          unit: string | null
          updated_at: string
        }
        Insert: {
          actual_value?: number | null
          commodity?: string | null
          confidence_level?: string | null
          created_at?: string
          id?: string
          key_factors?: string[] | null
          methodology?: string | null
          predicted_value?: number | null
          prediction_date?: string | null
          prediction_type: string
          target_date?: string | null
          timeframe?: string | null
          unit?: string | null
          updated_at?: string
        }
        Update: {
          actual_value?: number | null
          commodity?: string | null
          confidence_level?: string | null
          created_at?: string
          id?: string
          key_factors?: string[] | null
          methodology?: string | null
          predicted_value?: number | null
          prediction_date?: string | null
          prediction_type?: string
          target_date?: string | null
          timeframe?: string | null
          unit?: string | null
          updated_at?: string
        }
        Relationships: []
      }
      mining_locations: {
        Row: {
          created_at: string
          description: string | null
          environmental_data: Json | null
          id: string
          latitude: number | null
          location_type: string
          longitude: number | null
          mining_method: string | null
          name: string
          operational_status: string | null
          production_capacity: string | null
          region: string | null
          updated_at: string
        }
        Insert: {
          created_at?: string
          description?: string | null
          environmental_data?: Json | null
          id?: string
          latitude?: number | null
          location_type: string
          longitude?: number | null
          mining_method?: string | null
          name: string
          operational_status?: string | null
          production_capacity?: string | null
          region?: string | null
          updated_at?: string
        }
        Update: {
          created_at?: string
          description?: string | null
          environmental_data?: Json | null
          id?: string
          latitude?: number | null
          location_type?: string
          longitude?: number | null
          mining_method?: string | null
          name?: string
          operational_status?: string | null
          production_capacity?: string | null
          region?: string | null
          updated_at?: string
        }
        Relationships: []
      }
      mining_methods: {
        Row: {
          advantages: string[] | null
          case_studies: string[] | null
          cost_factors: Json | null
          created_at: string
          description: string | null
          disadvantages: string[] | null
          environmental_impact: string | null
          id: string
          method_name: string
          method_type: string
          suitable_deposits: string[] | null
          updated_at: string
        }
        Insert: {
          advantages?: string[] | null
          case_studies?: string[] | null
          cost_factors?: Json | null
          created_at?: string
          description?: string | null
          disadvantages?: string[] | null
          environmental_impact?: string | null
          id?: string
          method_name: string
          method_type: string
          suitable_deposits?: string[] | null
          updated_at?: string
        }
        Update: {
          advantages?: string[] | null
          case_studies?: string[] | null
          cost_factors?: Json | null
          created_at?: string
          description?: string | null
          disadvantages?: string[] | null
          environmental_impact?: string | null
          id?: string
          method_name?: string
          method_type?: string
          suitable_deposits?: string[] | null
          updated_at?: string
        }
        Relationships: []
      }
      news_updates: {
        Row: {
          author: string | null
          category: string
          content: string | null
          created_at: string
          external_url: string | null
          id: string
          image_url: string | null
          importance_level: string | null
          publication_date: string | null
          source: string | null
          tags: string[] | null
          title: string
          updated_at: string
        }
        Insert: {
          author?: string | null
          category: string
          content?: string | null
          created_at?: string
          external_url?: string | null
          id?: string
          image_url?: string | null
          importance_level?: string | null
          publication_date?: string | null
          source?: string | null
          tags?: string[] | null
          title: string
          updated_at?: string
        }
        Update: {
          author?: string | null
          category?: string
          content?: string | null
          created_at?: string
          external_url?: string | null
          id?: string
          image_url?: string | null
          importance_level?: string | null
          publication_date?: string | null
          source?: string | null
          tags?: string[] | null
          title?: string
          updated_at?: string
        }
        Relationships: []
      }
      nuclear_anniversary: {
        Row: {
          achievements: string[] | null
          country: string | null
          created_at: string
          description: string | null
          historical_context: string | null
          id: string
          images: string[] | null
          impact_areas: string[] | null
          key_figures: string[] | null
          milestone_title: string
          milestone_year: number
          significance: string | null
          updated_at: string
        }
        Insert: {
          achievements?: string[] | null
          country?: string | null
          created_at?: string
          description?: string | null
          historical_context?: string | null
          id?: string
          images?: string[] | null
          impact_areas?: string[] | null
          key_figures?: string[] | null
          milestone_title: string
          milestone_year: number
          significance?: string | null
          updated_at?: string
        }
        Update: {
          achievements?: string[] | null
          country?: string | null
          created_at?: string
          description?: string | null
          historical_context?: string | null
          id?: string
          images?: string[] | null
          impact_areas?: string[] | null
          key_figures?: string[] | null
          milestone_title?: string
          milestone_year?: number
          significance?: string | null
          updated_at?: string
        }
        Relationships: []
      }
      nuclear_plant_requirements: {
        Row: {
          availability: string | null
          component_category: string
          component_name: string
          component_type: string | null
          cost_estimate: string | null
          created_at: string
          id: string
          quality_standards: string[] | null
          specifications: Json | null
          strategic_importance: string | null
          suppliers: string[] | null
          updated_at: string
        }
        Insert: {
          availability?: string | null
          component_category: string
          component_name: string
          component_type?: string | null
          cost_estimate?: string | null
          created_at?: string
          id?: string
          quality_standards?: string[] | null
          specifications?: Json | null
          strategic_importance?: string | null
          suppliers?: string[] | null
          updated_at?: string
        }
        Update: {
          availability?: string | null
          component_category?: string
          component_name?: string
          component_type?: string | null
          cost_estimate?: string | null
          created_at?: string
          id?: string
          quality_standards?: string[] | null
          specifications?: Json | null
          strategic_importance?: string | null
          suppliers?: string[] | null
          updated_at?: string
        }
        Relationships: []
      }
      player_stats: {
        Row: {
          achievements_earned: string[] | null
          created_at: string
          games_played: number | null
          id: string
          mining_levels_completed: number | null
          player_name: string
          quiz_completed: number | null
          stories_watched: number | null
          total_score: number | null
          updated_at: string
        }
        Insert: {
          achievements_earned?: string[] | null
          created_at?: string
          games_played?: number | null
          id?: string
          mining_levels_completed?: number | null
          player_name: string
          quiz_completed?: number | null
          stories_watched?: number | null
          total_score?: number | null
          updated_at?: string
        }
        Update: {
          achievements_earned?: string[] | null
          created_at?: string
          games_played?: number | null
          id?: string
          mining_levels_completed?: number | null
          player_name?: string
          quiz_completed?: number | null
          stories_watched?: number | null
          total_score?: number | null
          updated_at?: string
        }
        Relationships: []
      }
      quiz_questions: {
        Row: {
          age_group: string | null
          category: string | null
          correct_answer: number
          created_at: string
          difficulty_level: string | null
          explanation: string | null
          id: string
          options: string[]
          points: number | null
          question_text: string
          updated_at: string
        }
        Insert: {
          age_group?: string | null
          category?: string | null
          correct_answer: number
          created_at?: string
          difficulty_level?: string | null
          explanation?: string | null
          id?: string
          options: string[]
          points?: number | null
          question_text: string
          updated_at?: string
        }
        Update: {
          age_group?: string | null
          category?: string | null
          correct_answer?: number
          created_at?: string
          difficulty_level?: string | null
          explanation?: string | null
          id?: string
          options?: string[]
          points?: number | null
          question_text?: string
          updated_at?: string
        }
        Relationships: []
      }
      risk_assessments: {
        Row: {
          assessment_date: string | null
          assessment_type: string
          created_at: string
          id: string
          impact_severity: string | null
          location_id: string | null
          mitigation_strategies: string[] | null
          monitoring_requirements: string[] | null
          next_review_date: string | null
          probability: string | null
          risk_category: string
          risk_description: string | null
          updated_at: string
        }
        Insert: {
          assessment_date?: string | null
          assessment_type: string
          created_at?: string
          id?: string
          impact_severity?: string | null
          location_id?: string | null
          mitigation_strategies?: string[] | null
          monitoring_requirements?: string[] | null
          next_review_date?: string | null
          probability?: string | null
          risk_category: string
          risk_description?: string | null
          updated_at?: string
        }
        Update: {
          assessment_date?: string | null
          assessment_type?: string
          created_at?: string
          id?: string
          impact_severity?: string | null
          location_id?: string | null
          mitigation_strategies?: string[] | null
          monitoring_requirements?: string[] | null
          next_review_date?: string | null
          probability?: string | null
          risk_category?: string
          risk_description?: string | null
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "risk_assessments_location_id_fkey"
            columns: ["location_id"]
            isOneToOne: false
            referencedRelation: "mining_locations"
            referencedColumns: ["id"]
          },
        ]
      }
      statistics: {
        Row: {
          color: string | null
          created_at: string
          description: string | null
          display_order: number | null
          icon: string | null
          id: string
          is_visible: boolean | null
          title: string
          updated_at: string
          value: string
        }
        Insert: {
          color?: string | null
          created_at?: string
          description?: string | null
          display_order?: number | null
          icon?: string | null
          id?: string
          is_visible?: boolean | null
          title: string
          updated_at?: string
          value: string
        }
        Update: {
          color?: string | null
          created_at?: string
          description?: string | null
          display_order?: number | null
          icon?: string | null
          id?: string
          is_visible?: boolean | null
          title?: string
          updated_at?: string
          value?: string
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {},
  },
} as const
