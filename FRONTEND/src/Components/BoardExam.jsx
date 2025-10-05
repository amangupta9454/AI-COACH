import React from 'react'

const BoardExam = () => {
  return (
     <div className="w-full h-screen overflow-hidden m-0 p-0">
      <iframe
        src="https://exam-prep-kit.lovable.app/"
        title="Board Exam Preparation"
        className="w-full h-full border-0 overflow-hidden"
        style={{ minHeight: '100vh', minWidth: '100%', position: 'absolute', top: 0, left: 0, right: 0, bottom: 0 }}
        allowFullScreen
      ></iframe>
    </div>
  )
}

export default BoardExam;