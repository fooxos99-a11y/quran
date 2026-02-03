import { useRef, useState } from "react"
import { createClient } from "@supabase/supabase-js"
import { Upload } from "lucide-react"

import { Dialog, DialogContent, DialogTrigger, DialogClose } from "@/components/ui/dialog"

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
)

export function ImageUploadBox({ value, onUpload, onRemove }: {
  value?: string
  onUpload: (url: string) => void
  onRemove?: () => void
}) {
  const fileInputRef = useRef<HTMLInputElement>(null)
  const [open, setOpen] = useState(false)

  const handleBoxClick = () => {
    if (!value) fileInputRef.current?.click()
  }

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return
    const fileExt = file.name.split('.').pop()
    const fileName = `${Date.now()}.${fileExt}`
    const { data, error } = await supabase.storage.from('image').upload(fileName, file)
    if (error) {
      alert('فشل رفع الصورة')
      return
    }
    const { data: publicUrlData } = supabase.storage.from('image').getPublicUrl(fileName)
    onUpload(publicUrlData.publicUrl)
  }

  return (
    <>
      <>
        <div
          className="bg-card border-2 border-dashed border-border rounded-2xl min-h-[220px] flex items-center justify-center overflow-hidden hover:border-primary transition-colors cursor-pointer relative"
          onClick={handleBoxClick}
        >
          <input
            type="file"
            accept="image/*"
            ref={fileInputRef}
            onChange={handleFileChange}
            className="hidden"
          />
          {value ? (
            <>
              <img
                src={value}
                alt="صورة مرفوعة"
                className="object-contain max-h-52 w-full cursor-zoom-in"
                onClick={e => { e.stopPropagation(); setOpen(true) }}
              />
              {onRemove && (
                <button
                  type="button"
                  onClick={e => { e.stopPropagation(); onRemove(); }}
                  className="absolute top-1 left-1 bg-white/80 rounded-full w-6 h-6 flex items-center justify-center text-xs text-red-500 shadow hover:bg-white"
                  title="حذف الصورة"
                >
                  ×
                </button>
              )}
            </>
          ) : (
            <div className="relative w-full h-full flex flex-col items-center justify-center">
              <button
                type="button"
                onClick={e => { e.stopPropagation(); fileInputRef.current?.click(); }}
                className="absolute top-3 right-3 bg-primary text-white rounded-full w-9 h-9 flex items-center justify-center shadow-lg hover:bg-primary/80 transition-colors"
                title="رفع صورة"
                style={{ zIndex: 2 }}
              >
                <Upload size={20} />
              </button>
            </div>
          )}
        </div>
        {open && value && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 cursor-zoom-out"
            onClick={() => setOpen(false)}
          >
            <img
              src={value}
              alt="صورة مكبرة"
              className="max-w-full max-h-full rounded-lg shadow-2xl"
              style={{ objectFit: 'contain' }}
              onClick={e => e.stopPropagation()}
            />
            <button
              className="absolute top-6 right-8 text-white bg-black/60 rounded-full w-10 h-10 flex items-center justify-center text-2xl hover:bg-black/80"
              onClick={() => setOpen(false)}
              title="إغلاق"
              style={{ zIndex: 51 }}
            >×</button>
          </div>
        )}
      </>
    </>
  )
}
